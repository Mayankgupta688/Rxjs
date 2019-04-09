import { Observable, from } from 'rxjs';

function createObserverFromArray() {

    // Creating Observable from Array

    let source = from([1, 2, 3, 4, 67]);

    source.subscribe({
        next: function(value) {
            console.log(`input data ${value}`);
        }
    })
}

function createSimpleObserver() {

    let source = from([1, 2, 3, 4, 10, 5, 6, 7, 8, 9]);

    // The observer is a simple Object Literal with 3 callback functions

    source.subscribe(
        (val) => console.log(`input data ${val}`),
        (e) => console.log(e),
        () =>  console.log("complete")
    );
}

class Observer {
    next(data) {
        console.log(data)
    }

    error() {
        console.log("Error")
    }

    complete() {
        console.log("Complete")
    }
}


function createObserverWithClass() {

    let source = from([1, 2, 3, 4, 10, 5, 6, 7, 8, 9, 90]);

    source.subscribe(new Observer())
}


function createObservableWithSetInterval() {
    let source = Observable.create((observer) => {
        setInterval(() => {
            observer.next("Current Seconds: " + new Date().getMilliseconds())
        }, 1000)
    })

    source.subscribe((data) => console.log(data))
}


function createObservableWithSetTimeout() {
    let source = Observable.create((observer) => {
        setTimeout(() => {
            observer.next("Current Seconds: " + new Date().getMilliseconds());

            observer.complete();

        }, 1000)
    })

    source.subscribe(
        (data) => console.log(data), 
        (error) => console.log(error), 
        () => console.log("Complete")
    );
}

createObservableWithSetTimeout();