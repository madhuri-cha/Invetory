#include <iostream>
#include <string>
using namespace std;

class Animal
{
 public :
//   ~Animal()
//   {
//     cout<< "Animal destroyed" << endl;
//   }
 virtual ~Animal() //used virtual keyword, hence at first derived class des intialized then Animal des will intialized
 {
    cout<< "Animal destroyed" << endl;
 }
};

class Dog : public Animal
{
 public :
  ~Dog()
  {
    cout<< "Dog Des" << endl;
  }
};


int main()
{
 Animal* ptr = new Dog();
 delete ptr;

 return 0;
}