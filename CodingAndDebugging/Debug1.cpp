#include <iostream>
using namespace std;

int main()
{
    int *ptr = new int(10);
    delete ptr; //  Delete ptr and points to null.
    ptr=nullptr; // Corrected code.
    cout<< *ptr <<endl; // Causing error here.
    return 0;

}