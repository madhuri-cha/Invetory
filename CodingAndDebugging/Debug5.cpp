#include <iostream>
using namespace std;

class Array
{
    int *data;

public : 
    Array(int val)
    {
        data = new int(val);
    }    
    //Deep copy constructor. Solution for shallow copy
    Array(const Array &other)
    {
        data = new int (*other.data);
    }

    ~Array()
    {
        delete data;
    }
};

int main()
{
    Array a1(5);
    Array a2 = a1; // garbage valued will be assigned, location is assigned here, point to same memory location
    // not value assigned here because of shallow copy.
    //both attempt to delete same memory location
    // Solution :
    //hence we create Deep copy

    return 0;
}
