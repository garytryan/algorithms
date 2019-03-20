#include <stdio.h>

int findDuplicateRecursive (int * array, int length, int start, int end)
{
    if(end - start == 0)
    {
        return start;
    }
    // 1, 2
    // start = 1;
    // end = 2;
    int middle = end - start + 1 / 2;

    int count = 0;

    for (int i = 0; i < length; i++)
    {
        if (array[i] >= start && array[i] <= middle) {
            count++;
        }
    }

    if(count > (middle - start))
    {
        return findDuplicateRecursive(array, length, start, middle);
    }
    else
    {
        return findDuplicateRecursive(array, length, middle + 1, end);
    }

    return 0;
}

int findDuplicate (int * array, int length)
{
    return findDuplicateRecursive(array, length, 1, length);
}

void test1 ()
{
    int array[] = { 1, 2, 3, 1 };
    int length = sizeof(array) / sizeof(int);

    printf("%d\n", findDuplicate(array, length) == 1);
}

void test2 ()
{
    int array[] = { 1, 1, 1, 1 };
    int length = sizeof(array) / sizeof(int);

    printf("%d\n", findDuplicate(array, length) == 1);
}

void test3 ()
{
    int array[] = { 1, 1, 2, 3 };
    int length = sizeof(array) / sizeof(int);

    printf("%d\n", findDuplicate(array, length) == 1);
}

void test4 ()
{
    int array[] = { 1, 3, 3 };
    int length = sizeof(array) / sizeof(int);

    printf("%d\n", findDuplicate(array, length) == 3);
}

void test5 ()
{
    int array[] = { 3, 3, 3 };
    int length = sizeof(array) / sizeof(int);

    printf("%d\n", findDuplicate(array, length) == 3);
}

void test6 ()
{
    int array[] = { 3, 3, 1 };
    int length = sizeof(array) / sizeof(int);

    printf("%d\n", findDuplicate(array, length) == 3);
}

int main ()
{
   test1();
   test2();
   test3();
   test4();
   test5();
   test6();

    return 0;
}