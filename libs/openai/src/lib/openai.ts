import OpenAI from 'openai';

export class OpenAIApi {
  private static instance: OpenAIApi;
  private openAIInstance: OpenAI;

  private constructor() { 
    this.openAIInstance = new OpenAI({
      apiKey: process.env["OPENAI_API_KEY"],
      organization: process.env["OPENAI_ORG_ID"],
    });
  }

  public static initialize(): void {
      if (!this.instance) {
          this.instance = new OpenAIApi();
      }
  }

  public static getInstance(): OpenAIApi {
      if (!this.instance) {
          throw new Error("OpenAIApi has not been initialized. Call initialize() first.");
      }
      return this.instance;
  }

  public getOpenAI(): OpenAI {
    return this.openAIInstance;
  }
}