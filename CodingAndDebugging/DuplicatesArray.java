public class DuplicatesArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 4, 5, 3, 6, 1};
        int n = arr.length;

        System.out.print("Duplicate elements: ");
        for (int i = 0; i < n; i++) {
            boolean alreadyPrinted = false;
            boolean repeated = false;

            // check if already printed before
            for (int k = 0; k < i; k++) {
                if (arr[i] == arr[k]) {
                    alreadyPrinted = true;
                    break;
                }
            }

            if (alreadyPrinted) {
                continue; // skip if already handled
            }

            // check if arr[i] repeats later
            for (int j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    System.out.print(arr[i] + " "); // print duplicate
                    repeated = true;
                    break;
                }
            }

            // if it never repeated → unique element
            if (!repeated) {
                System.out.print(arr[i] + " ");
            }
        }
    }
}
