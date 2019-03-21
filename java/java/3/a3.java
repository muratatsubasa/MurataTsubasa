// 数の表示とサイコロ
public class a3 {
	public static void main(String[] args) {
		double rand = Math.random() * 6 + 1; //1~6の数字をランダムで出力する
		int number = (int)rand;							 //number変数にrand変数をint型で代入
		System.out.println(number);
	}
}