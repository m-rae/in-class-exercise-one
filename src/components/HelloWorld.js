export default {
    name: 'HelloWorld',
    computed: {
        inlineValidationClass() {
            return this.inputText.length > 50;
        },
        checklength() {
            return this.inputText.length > 50 ? 'error' : '';
        },
        isButtonDisabled() {
            return this.inputText.length > 50 || this.inputText.length === 0;
        }
    },
    data() {
        return {
            inputText: ''
        }
    }
};