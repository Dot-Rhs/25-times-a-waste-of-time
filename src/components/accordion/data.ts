interface IData {
    id: number,
    question: string,
    answer: string
}

const dummyData: IData[] = [
    {
        id: 1,
        question: 'Can I do stuff?',
        answer: 'Yea, I guess?'
    },
    {
        id: 2,
        question: 'Can I eat stuff?',
        answer: 'Yea, I guess?'
    }, {
        id: 3,
        question: 'How do I sleep?',
        answer: 'Just go to sleep innit'
    }
]

export default dummyData