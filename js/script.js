console.log('JS OK', Vue);

// Attivo Vue
const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            name: 'Santiago',
            image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/joystick-design-template-0d27cd04c9dca58fa3516fde1a7250f4_screen.jpg?ts=1626869886'
        }
    }
});
app.mount('#root');