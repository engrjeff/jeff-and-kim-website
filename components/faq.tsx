import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faq = [
  {
    question: 'Is this a Christian wedding?',
    answer: 'A resounding YES!',
  },
  {
    question: 'On kids at the wedding',
    answer:
      'In order to allow guests, including parents, to fully relax and enjoy the celebration, we have chosen to make our wedding an adults-only event. We appreciate your understanding and look forward to celebrating with you!',
  },
  {
    question: 'On being unplugged',
    answer:
      'We invite you to be fully present with us during our ceremony. Kindly refrain from using phones or cameras so that everyone can enjoy the moment together. We will have professional photographers capturing the day for you to cherish later!',
  },
  {
    question: 'On bringing a plus-one',
    answer:
      'Though we desire that many people would witness our wedding, there is a limit to the number of guests that we can accomodate so we can only invite selected people.',
  },
  {
    question: 'What happens if I do not RSVP in time?',
    answer:
      'If we do not receive your RSVP by the specified deadline, it will be marked as `No`. We will miss you celebrating with us. However, we have to provide a total headcount to our venue and caterers in a timely manner, so please RSVP on time! Thank you for understanding.',
  },
  {
    question: 'What time should I arrive?',
    answer:
      'The ceremony will begin promptly at 3:00 PM. We recommend arriving at least 15-20 minutes early to allow time for parking and seating.',
  },
  {
    question: 'Is the venue weather-proof?',
    answer:
      'Yes, the Garden Hive venue for ceremony and reception areas are covered so you can rest assured that weather will not impact the event.',
  },
  {
    question:
      'Is the reception venue a separate place from where the ceremony will be held?',
    answer:
      'The ceremony will be held at the Garden Hive garden while the reception area will be at the Garden Hive Hall. The two areas are just separated by a wall.',
  },
  {
    question: 'Are there parking spaces available at the venue?',
    answer:
      'Yes, there are plenty of parking spaces available at The Garden Hive for all our guests.',
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 border-t border"
    >
      <div className="max-w-xl">
        <div className="mb-8">
          <h2 className="font-elegant uppercase tracking-wider font-medium text-4xl text-center text-kimjeff">
            Common Questions & Concerns
          </h2>
        </div>
        <Accordion type="multiple" className="mt-6 font-decorative">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
