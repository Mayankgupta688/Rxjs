import { Observable, from } from 'rxjs';

// Creating Observable from Array

let source = from([1, 2, 3, 4]);

source.subscribe({
    next: function(value) {
        console.log(`input data ${value}`);
    }
})