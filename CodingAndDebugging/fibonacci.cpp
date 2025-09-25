#include <iostream>
using namespace std;

int main()
{
    int a=0;
    int b=1;
    int n;
    cout<<"Enter n ";
    cin>>n;
    cout<<a<<" "<<b<<" ";
    int c;
     int sum=a+b;
    for(int i=2; i < n; i++)
    {
        c= a+b;
        //sum = sum + c;  
        cout<<c<<" ";
        a=b;
        b=c;
        sum = sum + c;
    }
    cout<<"Sum is : "<<sum;
    return 0;
}
