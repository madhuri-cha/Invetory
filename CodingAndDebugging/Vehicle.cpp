#include <iostream>
using namespace std;

//fixing method overloading


class Vehicle
{
    public :
       virtual void start()
        {
            cout<< "Vehicle start" << endl;
        }

        virtual ~Vehicle() 
        {

        } // Also, add a virtual destructor
};

class Car : public Vehicle
{
    public :

        // void start ()
        // { 
        //     cout<< "Car start "<< endl;
        // }
        void start () override //now, car's method will call.
        {
            cout<< "Car start "<< endl;
        }
};


int main()
{
    Vehicle* v = new Car();
    v->start(); 
    delete v;

    return 0;
}