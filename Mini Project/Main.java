import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        HotelManagementSystem hms = new HotelManagementSystem();
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n==== Hotel Reservation System ====");
            System.out.println("1. Add Room");
            System.out.println("2. Update Room");
            System.out.println("3. Delete Room");
            System.out.println("4. Search Room");
            System.out.println("5. Display All Rooms");
            System.out.println("6. Book Room");
            System.out.println("7. Cancel Reservation");
            System.out.println("8. Display All Bookings");
            System.out.println("9. Display Available Rooms by Type");
            System.out.println("0. Exit");
            System.out.print("Enter choice: ");
            int choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter Room Number: ");
                    int rn = sc.nextInt();
                    sc.nextLine();
                    System.out.print("Enter Room Type: ");
                    String type = sc.nextLine();
                    System.out.print("Enter Price: ");
                    double price = sc.nextDouble();
                    hms.addRoom(new Room(rn, type, price, true));
                    break;
                case 2:
                    System.out.print("Enter Room Number to update: ");
                    rn = sc.nextInt();
                    sc.nextLine();
                    System.out.print("Enter New Type: ");
                    type = sc.nextLine();
                    System.out.print("Enter New Price: ");
                    price = sc.nextDouble();
                    hms.updateRoom(rn, type, price);
                    break;
                case 3:
                    System.out.print("Enter Room Number to delete: ");
                    rn = sc.nextInt();
                    hms.deleteRoom(rn);
                    break;
                case 4:
                    System.out.print("Enter Room Number to search: ");
                    rn = sc.nextInt();
                    Room r = hms.searchRoom(rn);
                    System.out.println(r != null ? r : "Room not found!");
                    break;
                case 5:
                    hms.displayRooms();
                    break;
                case 6:
                    sc.nextLine();
                    System.out.print("Enter Customer Name: ");
                    String name = sc.nextLine();
                    System.out.print("Enter Room Number: ");
                    rn = sc.nextInt();
                    hms.bookRoom(name, rn);
                    break;
                case 7:
                    System.out.print("Enter Room Number to cancel: ");
                    rn = sc.nextInt();
                    hms.cancelReservation(rn);
                    break;
                case 8:
                    hms.displayBookings();
                    break;
                case 9:
                    sc.nextLine();
                    System.out.print("Enter Room Type (Single/Double/Deluxe): ");
                    type = sc.nextLine();
                    hms.displayAvailableRooms(type);
                    break;
                case 0:
                    System.out.println("Exiting...");
                    sc.close();
                    return;
                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}
