package tester;

import java.util.List;

public class StudentAnalyzer {
    /**
     * Phân tích điểm số và trả về số lượng học sinh đạt loại Giỏi.
     */
    public int countExcellentStudents(List<Double> scores) {
        if (scores == null || scores.isEmpty())
            return 0;
        int count = 0;
        for (Double score : scores) {
            // Điều kiện 1: Bỏ qua điểm không hợp lệ (0-10)
            if (score >= 0 && score <= 10) {
                // Vòng lặp 1: Lọc học sinh giỏi (>= 8.0)
                if (score >= 8.0)
                    count++;
            }
        }
        return count;
    }

    /**
     * Tính điểm trung bình của các điểm hợp lệ.
     */
    public double calculateValidAverage(List<Double> scores) {
        if (scores == null || scores.isEmpty())
            return 0.0;
        double sum = 0;
        int validCount = 0;
        for (Double score : scores) {
            if (score >= 0 && score <= 10) {
                sum += score;
                validCount++;
            }
        }
        return validCount == 0 ? 0.0 : sum / validCount;
    }
}