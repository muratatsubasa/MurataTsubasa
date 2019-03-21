// 肉の量り売り

public class Main {
    public static void main(String[] args) {
        int price = 128;
        int weight = 300;
        int amount = price / 100 * weight;
        System.out.println("100グラム" + price + "円の肉、" + weight + "グラムは、" + amount + "円です。");
    }
}
