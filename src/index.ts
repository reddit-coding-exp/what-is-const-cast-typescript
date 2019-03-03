import Immutable from 'immutable'


const PersonRecordCreator = Immutable.Record({
    firstName: '',
    lastName: '',
    address: ['WA', '98102'] as const
})





/**
  Our library code
  */

type State = 'WA' | 'NY' | 'ME'


type Zip = '98102' | '10803' | '12222'

interface Person {
    readonly firstName: string
    readonly lastName: string
    readonly address: readonly [State, Zip]
}


function doStuff(person: Immutable.RecordOf<Person>){
    console.log(person.firstName)
}





/**
 * Using the library
 */
const myPerson = PersonRecordCreator({
    firstName: 'bar',
    lastName: 'foobar'
})

doStuff(myPerson)

