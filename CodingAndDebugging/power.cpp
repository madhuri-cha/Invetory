#include <iostream>


using namespace std;



int  pow(int n1, int n2)
{
   if(n1 == 0)
   {
    
     return 0;
   }
  
 return pow(n1, n2-1);
 
  
};

int main()
{

    pow(2, 3);
    return 0;
}

