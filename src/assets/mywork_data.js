import project1_img from '../assets/weather.webp'
import project2_img from '../assets/sentiment.webp'
import project3_img from '../assets/fraud.jpg'

const mywork_data = [
    {
        w_no:1,
        w_name:"Weather Classification",
        w_img:project1_img,
        w_des:"Developed a deep learning model leveraging transfer learningtechniques, specifically VGG16 architecture, to accurately classify weather conditions such as sunny, cloudy,rainy, and snowy based on input images."
    },
    {
        w_no:2,
        w_name:"Sentiment Analysis",
        w_img:project2_img,
        w_des:"Built an NLP-based sentiment analysis model using LSTM to classify Amazon reviews as positive or negative.Preprocessed text data using tokenization, stop-word removal, and word embeddings."
    },
    {
        w_no:3,
        w_name:"Fraud Detection",
        w_img:project3_img,
        w_des:"Developed a Credit Card Fraud Detection model using Logistic Regressionand XGBoost to classify fraudulent transactions. Preprocessed imbalanced data using techniques like SMOTEand undersampling, and evaluated the model’s performance using accuracy, precision, and recall scores."
    },
]
 
export default mywork_data;