#include <stdio.h>

int count = 0;

void next(int x, int y) {
	if (x == 0 && y == 0)
		count++;
	else if (x == 0)
		next(x, y-1);
	else if (y == 0)
		next(x-1, y);
	else {
		next(x-1, y);
		next(x, y-1);
	}

}

int main() {

	next(20,20);

	printf("end is: %d", count);

	return 0;
}


