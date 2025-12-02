// 데이터베이스 연결 가져오기
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Get all dogs
const getDogs = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM dogs");
    res.json({
      count: result.rows.length,
      dogs: result.rows,
    });
  } catch (error) {
    console.error("Database error:", error.stack); // 에러 스택 출력
    res.status(500).json({
      message: "Database error",
      error: error.message || "Unknown error",
      stack: error.stack, // 에러 스택 반환
    });
  }
};

// Add a new dog
const addDog = async (req, res) => {
  const { name, breed, age } = req.body;
  try {
    const result = await pool.query("INSERT INTO dogs (name, breed, age) VALUES ($1, $2, $3) RETURNING *", [name, breed, age]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

// Delete a dog
const deleteDog = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM dogs WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: "Dog not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

// Update a dog
const updateDog = async (req, res) => {
  const { id } = req.params;
  const { name, breed, age } = req.body;
  try {
    const result = await pool.query("UPDATE dogs SET name = $1, breed = $2, age = $3 WHERE id = $4 RETURNING *", [name, breed, age, id]);
    if (result.rowCount > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: "Dog not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

module.exports = {
  pool,
  getDogs,
  addDog,
  deleteDog,
  updateDog,
};
