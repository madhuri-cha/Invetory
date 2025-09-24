import java.time.LocalDate;

public class Reservation {
    private String customerName;
    private int roomNumber;
    private LocalDate bookingDate;

    public Reservation(String customerName, int roomNumber, LocalDate bookingDate) {
        this.customerName = customerName;
        this.roomNumber = roomNumber;
        this.bookingDate = bookingDate;
    }

    public String getCustomerName() { return customerName; }
    public int getRoomNumber() { return roomNumber; }
    public LocalDate getBookingDate() { return bookingDate; }

    @Override
    public String toString() {
        return customerName + " | Room: " + roomNumber + " | Date: " + bookingDate;
    }
}
