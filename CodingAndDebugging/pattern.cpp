#include <iostream>
using namespace std;

int main()
{
    int num1;
    cout<<"Enter rows: ";
    cin>>num1;
    
    for(int i=0; i < num1; i++)
    {
        for(int j=0; j <= i ; j++)
        {
            cout<<"* ";
        }
        cout<<endl;
    }
    return 0;
}

