#include <iostream>
using namespace std;
//method overloading

class Calculator {
public:
    int add(int a, int b) 
    {
        cout << "Add two integer" << endl;
        return a + b;
    }

   double add(double a, double b) 
    {
        cout << "Add two doubles" << endl;
        return a + b;
    }

    int add(int a, int b, int c) {
        cout << "Add three integer" << endl;
        return a + b + c;
    }
};

int main() 
{
    Calculator calc;
    cout << calc.add(5, 7) << endl;
    cout << calc.add(3.5, 2.7) << endl;
    cout << calc.add(1, 2, 3) << endl;

    return 0;
}
