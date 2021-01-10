import flatiron  from '../Pictures/flatiron.png'
import care  from '../Pictures/care.png'
import frigenhungry  from '../Pictures/frigenhungry.png'
import finance  from '../Pictures/finance.png'
export const Data = [
    {
        Name: 'Flatiron General Hospital', 
        img: flatiron,
        text: 'Hospital app for doctors to use in a hospital, urgent care, or even private practice setting. This app allows doctors to keep track of important patient information.',
        github: 'https://github.com/aribakhan97/flatiron-general-frontend',
        demo: '',
        technologies: ['Ruby','postgreSQL','Javascript', 'React', 'Bootstrap', 'RxNav API']

    },

    {
        Name: 'Khan-Liang Finance', 
        img: finance,
        text: 'Created a personal finance app to invest in stocks, monitor current balance, and to track financial goals. Used an IEX Cloud API to retrieve real-time stock data',
        github: 'https://github.com/aribakhan97/Mod2-Final-Project-Financial-App-1',
        demo: '',
        technologies: ['Ruby','postgreSQL', 'CSS', 'IEX Cloud API']


    },

    {
        Name: 'We Care', 
        img: care,
        text: 'Designed an app to promote Mental Health Awareness during the pandemic.Features include tracking moods on a scale of 1-10, having an instant mood booster button, and a new motivational quote with every login.',
        github: 'https://github.com/aribakhan97/we_care_frontend',
        demo: '',
        technologies: ['Ruby','postgreSQL','Javascript', 'HTML', 'CSS']


    },

    {
        Name: 'FridgenHungry', 
        img: frigenhungry,
        text: 'An app to promote staying at home during the pandemic by giving users recipes based on ingredients at hand. Users can select ingredients which they have at home and get nutritional facts on specific items.',
        github: 'https://github.com/aribakhan97/FridgenHungry-frontend',
        demo: '',
        technologies: ['Ruby','postgreSQL','Javascript', 'React', 'Bootstrap', 'Edamam API']


    },
]

export default Data;