package main
type CategorySummary struct {
	Title string
	Tasks int
	AvgValue	float64
}
func createTables(db *sql.DB){
	db.Exec("CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, title TEXT, tasks INTEGER, avg_value REAL)")
}

func createCategorySummaries (db *sql.DB) ([]CategorySummary, error){ // HL
	rows, err := db.Query("SELECT title, tasks, avg_value FROM categories") // HL
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var summaries []CategorySummary
	for rows.Next() {
		var summary CategorySummary
		err := rows.Scan(&summary.Title, &summary.Tasks, &summary.AvgValue)
		if err != nil {
			return nil, err
		}
		summaries = append(summaries, summary)
	}
	return summaries, nil
}
