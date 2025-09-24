#include <iostream>
using namespace std;

class MyClass 
{
 int *data;

public :
    MyClass()
    {
        data = new int(10);
    }
    ~MyClass()
    {
        delete data; 
        //points to null. 
        data=nullptr;
        //delete data; already delete it, hence Data crashing ocuured here. If we deleting one location two times then data crashing occured.
    }
};

int main()
{
    MyClass obj;
    return 0;
}