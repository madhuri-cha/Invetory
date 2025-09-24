import java.util.*;
import java.time.LocalDate;

public class HotelManagementSystem {
    private List<Room> rooms = new ArrayList<>();
    private List<Reservation> reservations = new ArrayList<>();

    public void addRoom(Room room) {
        rooms.add(room);
        System.out.println("Room added successfully!");
    }

    public void updateRoom(int roomNumber, String roomType, double price) {
        for (int i = 0; i < rooms.size(); i++) {
            Room room = rooms.get(i);
            if (room.getRoomNumber() == roomNumber) {
                rooms.set(i, new Room(roomNumber, roomType, price, room.isAvailable()));
                System.out.println("Room updated successfully!");
                return;
            }
        }
        System.out.println("Room not found!");
    }

    public void deleteRoom(int roomNumber) {
        rooms.removeIf(r -> r.getRoomNumber() == roomNumber);
        System.out.println("Room deleted!");
    }

    public Room searchRoom(int roomNumber) {
        for (Room room : rooms) {
            if (room.getRoomNumber() == roomNumber) return room;
        }
        return null;
    }

    public void bookRoom(String customerName, int roomNumber) {
        Room room = searchRoom(roomNumber);
        if (room != null && room.isAvailable()) {
            room.setAvailable(false);
            reservations.add(new Reservation(customerName, roomNumber, LocalDate.now()));
            System.out.println("Room booked successfully!");
        } else {
            System.out.println("Room is not available!");
        }
    }

    public void cancelReservation(int roomNumber) {
        reservations.removeIf(r -> r.getRoomNumber() == roomNumber);
        Room room = searchRoom(roomNumber);
        if (room != null) room.setAvailable(true);
        System.out.println("Reservation cancelled!");
    }

    public void displayRooms() {
        System.out.println("Room No | Type | Price | Availability");
        for (Room room : rooms) {
            System.out.println(room);
        }
    }

    public void displayAvailableRooms(String type) {
        System.out.println("Available " + type + " Rooms:");
        for (Room room : rooms) {
            if (room.isAvailable() && room.getRoomType().equalsIgnoreCase(type)) {
                System.out.println(room);
            }
        }
    }

    public void displayBookings() {
        System.out.println("Customer | Room No | Date");
        for (Reservation r : reservations) {
            System.out.println(r);
        }
    }
}
