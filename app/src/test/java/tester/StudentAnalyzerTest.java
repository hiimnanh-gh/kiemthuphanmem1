package tester;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.Collections;

public class StudentAnalyzerTest {
    StudentAnalyzer analyzer = new StudentAnalyzer();

    @Test
    public void testCountExcellentStudents() {
        // Trường hợp bình thường: Có điểm hợp lệ và không hợp lệ
        assertEquals(2, analyzer.countExcellentStudents(Arrays.asList(9.0, 8.5, 7.0, 11.0, -1.0)));
        // Trường hợp biên: Danh sách trống
        assertEquals(0, analyzer.countExcellentStudents(Collections.emptyList()));
        // Trường hợp biên: Toàn điểm hợp lệ (0 và 10)
        assertEquals(1, analyzer.countExcellentStudents(Arrays.asList(0.0, 10.0)));
    }

    @Test
    public void testCalculateValidAverage() {
        // Điểm hợp lệ là 9.0, 8.5, 7.0 -> TB = (24.5 / 3) = 8.166...
        assertEquals(8.166, analyzer.calculateValidAverage(Arrays.asList(9.0, 8.5, 7.0, 11.0, -1.0)), 0.01);
        // Danh sách trống
        assertEquals(0, analyzer.calculateValidAverage(Collections.emptyList()), 0.001);
    }
}