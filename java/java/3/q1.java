// 数の表示とサイコロ
public class q1 {
	public static void main(String[] args) {
		double rand = Math.random() * 6 + 1; 
		int number = (int)rand;              
		System.out.println(number); 
	}
}

// 表示結果
// サイコロの目は[1~6]です