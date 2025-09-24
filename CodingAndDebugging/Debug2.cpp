#include <iostream>
using namespace std;
int* getValue()
{
   // int x = 5; // Local variable  
    int *x = new int(5);
    //return &x; //here we return address of the value.
    return x;
}
int main()
{
    int *ptr = getValue();
    cout<< *ptr << endl;
    delete ptr; // Free up the space.
    return 0;
}