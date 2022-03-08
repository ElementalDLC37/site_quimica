import { createStore } from 'redux'

const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "1º ANO A",
            lessons: [
                { 
                    id: 1, 
                    title: "Penicilina",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                { 
                    id: 2, 
                    title: "Heroina",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            id: 2,
            title: "1º ANO B",
            lessons: [
                {
                    id: 3, 
                    title: "Lean",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                { 
                    id: 4, 
                    title: "Krokodil",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                { 
                    id: 5, 
                    title: "Cafeína",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                { 
                    id: 6, 
                    title: "Taurina",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        },
        {
            id: 3,
            title: "1º ANO C",
            lessons: [
                {
                    id: 7, 
                    title: "Krokodil",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                { 
                    id: 8, 
                    title: "THC",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                { 
                    id: 9, 
                    title: "Cafeína",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                },
                {
                    id: 10, 
                    title: "Skank",
                    link: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        }
    ]
}

function reducer(state = INITIAL_STATE , action) {
    if(action.type == 'TOGGLE_LESSON') {
        return { ...state, 
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }

    return state
}

const store = createStore(reducer)

export default store