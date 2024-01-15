import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditingDataService } from './editing-data.service';
import { Intent } from 'src/models/intent.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '';
  private intents: Intent[] = [];

  constructor(private http: HttpClient,private service :EditingDataService) {this.loadIntents();}


  sendMessage(message: string, key:string): Observable<any> {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
    };

    const requestBody = {
      model: 'gpt-3.5-turbo',
      temperature: 0.5,
      max_tokens: 100,
      messages: [{ role: 'user', content: message }],
    };

    return this.http.post(this.apiUrl, requestBody, requestOptions);
  }

  getSpecificKey(keyId:number): Observable<any> {
    return this.http.get<any>(`${'https://zippy-unit-production.up.railway.app'}/apiKeys/${keyId}`);
  }

  private isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  isPopupVisible1(): boolean {
    return this.isPopupVisible;
  }


  private loadIntents() {
    this.intents = [
      {
        name: 'Greeting',
        examples: ['Hello', 'Hi','hi','hii','hai'],
        response: 'Hello! I am ROBORAAH, How can I assist you?',
      },
      {name: "services",
      examples: ["What are the services you provide", "available services"],
      response: "We provide Video Editing ,Reels Editing ,Graphics Design & VFX Design etc",
      },
      {name: "team",
      examples: ["Who is the core team", "members of team"],
      response: "Rohit Gupta 'CEO' and Arpana Kumari'CTO' ",
      },
      {name: "time-taken",
      examples: ["How long will it take to complete the video", "Time take to complete process"],
       "response": "it will depend on your requirements And then suggest to fill the form for video request.",
      },
      {name: "video-request",
      examples: ["How to add a request", "How to sent video request"],
      "response": "First come to home/dashboard in navigation get a option video-request click on that fill the required details and click on send.",
    
      },
      {name: "contact",
      examples: ["How can I connect to executive", "how to contact"],
      response: "Come to bottom part of website and check there is option contact just click on that button fill your details then click on send our executive will   reach to your help",
   
      },

    {
      name: "options",
      examples: ["How you could help me?", "What help you provide?", "How you can be helpful?"],
      response: 
        "I can provide support related to technical queries, management-related queries, order-related queries, tracking-related queries, procurement queries, and outsourcing problems",
    },
    {
      name: "invalid",
      examples: ["Marry me", "I love You", "date me", "chat with me", "I am bored"],
      response: "Please ask organization-related queries.",
    },
    {
      name: "about",
      examples: ["how you doing?", "how are you"," h r u?"],
      response: "Thanks for asking! How can I help you?",
    },
    {
      name: "fallback",
      examples: [],
      response: 
        "Sorry, I can't understand your request. Please try rephrasing or provide more details.",
    },
    {
      name: "customer_satisfaction",
      examples: ["how was the customer response", "Is the customer happy?", "what was the customer feedback?"],
      response: "The customer was happy and has given a good rating",
    },
    {
      name: "goodbye",
      examples: ["Bye", "See you later", "Goodbye", "Nice chatting to you, bye", "Till next time"],
      response: "Bye! Come back again soon.",
    },
    {
      name: "greeting",
      examples: ["Hi there", "hi", "hii", "How are you", "Is anyone there?", "Hey", "hai", "Hola", "Hello", "Good day", "H r u"],
      response: "Hello, thanks for asking, How may I help You ?",
    },
    {
      name: "time-taken",
      examples: ["How long will it take to complete the video", "Time taken to complete process"],
      response: "It will depend on your requirements And then suggest filling the form for a video request.",
    },
    {
      name: "video-request",
      examples: ["How to add a request", "How to send a video request"],
      response:"First come to home/dashboard in navigation get an option video-request click on that fill the required details and click on send.",
    },
    {
      name: "contact",
      examples: ["How can I connect to an executive", "how to contact"],
      response: "Come to the bottom part of the website and check there is an option contact just click on that button fill your details then click on send our executive will reach to your help",
    },
    {
      name: "services",
      examples: ["What are the services you provide", "available services"],
      response: "We provide Video Editing Reels Editing, Graphics Design VFX Design etc",
    },
    {
      name: "pricing",
      examples: ["What are your pricing plans", "Cost of your services", "Tell me about your pricing"],
      response: "For detailed information about our pricing plans, please visit the 'Pricing' section on our website or contact our team through the 'Contact' option at the bottom of the page.",
    },
    {
      name: "portfolio",
      examples: ["Can I see your previous work?", "Show me your portfolio", "Examples of your projects"],
      response:"Certainly! You can find examples of our work and projects in the 'Portfolio' section on our website. Feel free to explore and get a glimpse of our capabilities.",
    },
    {
      name: "collaboration",
      examples: ["Do you collaborate with other businesses?", "Partnerships", "Collaboration opportunities"],
      response:"Yes, we actively seek collaboration opportunities with other businesses. If you're interested in partnering with us, please reach out through the 'Contact' section for further discussions.",
    },
    {
      name: "feedback",
      examples: ["How can I provide feedback?", "Leave a review", "Customer testimonials"],
      response:"We appreciate your feedback! You can leave a review or provide feedback through the 'Feedback' or 'Testimonials' section on our website. Your opinions are valuable to us.",
    },
    {
      name: "customization",
      examples: ["Can I request custom services?", "Customization options", "Tailored solutions"],
      response:"Absolutely! We understand that every client has unique needs. Feel free to discuss your requirements with our team, and we can explore custom solutions tailored to meet your specific needs.",
    },
    {
      name: "career",
      examples: ["Are you hiring?", "Job opportunities", "Joining your team"],
      response:"We are always on the lookout for talented individuals to join our team. Check the 'Careers' section on our website for current job opportunities and details on how to apply.",
    },
    {
      name: "technology",
      examples: ["What technologies do you use?", "Tech stack", "Innovations"],
      response:"Our organization utilizes cutting-edge technologies in our services. For a detailed overview of our tech stack and innovations, you can visit the 'Technology' section on our website.",
    },
    {
      name: "social-media",
      examples: ["Are you active on social media?", "Social media accounts", "Follow on social platforms"],
      response:"Yes, we are active on various social media platforms. Stay connected with us by following our accounts on platforms such as Twitter, Facebook, and Instagram for the latest updates, news, and behind-the-scenes content.",
    },
    // Add more intents with examples and response as needed
  ];
}


   

  getIntentResponse(userMessage: string): string {
    // Match userMessage with intent examples and return the response
    for (const intent of this.intents) {
      if (intent.examples.some(example => userMessage.toLowerCase().includes(example.toLowerCase()))) {
        return intent.response;
      }
    }

    // Default response if no match is found
    return 'I\'m sorry, I don\'t understand that.';
  }
}
