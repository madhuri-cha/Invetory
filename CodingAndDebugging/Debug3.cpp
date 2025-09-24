#include <iostream>
using namespace std;

class Student
{
 string name;
 int age;

public :
    Student(string n, int a) // Assigned value to age variable
    {
        name=n;
        age=a; //
    }
    void show()
    {
        cout<< name <<" "<< age << endl;
    }
};

int main()
{
    Student s("Harry", 90);
    s.show();
    return 0;
}