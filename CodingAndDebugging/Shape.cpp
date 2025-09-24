#include <iostream>
#include <string>
using namespace std;

// class Shape
// {
//     string circle;
//     int radii;

// public : 
//    Shape(string c, int r)
//    {
//      circle=c;
//      radii=r;
//    }

// };
// class Circle :public Shape
// {
//     void print()
//    {
//     cout<<circle<<" "<<radii;
//    }
// };

// int main()
// {
    
//     Shape c("Circle", 3);
//     c.print();
//     return 0;

// }




// class Shape {
// protected:
//     string name;
//     int radii;

// public:
//     Shape(string n, int r)
//      {
//         name = n;
//         radii = r;
//     }
// };

// class Circle : public Shape 
// {
// public:
//     Circle(string n, int r) : Shape(n, r) {}

//     void print()
//     {
//         cout << name << " " << radii << endl;
//     }
// };

// int main() 
// {
//     Circle c("Circle", 3);
//     c.print();
//     return 0;
// }


class Shape {

public:
     string name;
    Shape(string n)
     {
        name = n;
       
    }
};

class Circle : public Shape 
{
public:
    int radius;
    // Circle(int r)
    // {
    //     radius = r;
    // }
    Circle(int r) : Shape(" circle")
    {
        radius = r;
    }
 
};

int main() 
{
    Circle c(5);
    cout << c.name << " " << c.radius << endl;
    return 0;
}