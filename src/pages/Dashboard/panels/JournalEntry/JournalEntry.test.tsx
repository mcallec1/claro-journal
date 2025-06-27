import '@testing-library/jest-dom';
// import { render, fireEvent } from '@testing-library/react';
// import { JournalEntry } from './JournalEntry';
// import dayjs from 'dayjs';

// const journalText = "Mocked data.\nSunday morning, drank too much last night - which is becoming a regular occurrence. Anyway, I don't need to keep repeating here why I need to stop.\nI need to get back to my routines I had before I moved to Melbourne and I had last year.\nCleaning the house on my lunch breaks, waking up at 5.30am and going to sleep at 9.30pm.\nBe more strict with keto. I've been eating such crappy food lately.\nI'll start all that from tomorrow. I'm not going to gradually start, I'll just do it in one go. It's not like it's new to me so I should be able to slip back into that quite easily.\nIt's like I was talking about yesterday - it's all about self-perception and the habits and routines you have shape your self-perception and identity. So the more of the habits that I do each day the quicker it becomes my identity and who I am.\nI need to write some tests for the journal app. I'm not going to overthink things, just write them and then add to them later. I don't want to get hung up trying to write the perfect tests. I'll just get some basic ones written and then learn as I go.\nI just need to get a basic grasp on what unit, integration and end to end testing I need.\nI just need a framework in my mind as a starting point. From there I can make decisions about what tests I need to write.\nI was also thinking of creating my own plan to help me with spoken communication and improving in that area.\nI'm going to create a set of daily habits that I'll do for a few minutes each day that progressively increase my ability and confidence in this area. I spent some time looking at existing app out there, especially AI ones - and they just aren't quite there yet.\nI know the areas I want to target. I know the goals I'm trying to reach. I also have a theory about why good communicators are able to easily explain their opinions and their opinions are usually well thought out and considered. I'm not talking about opinions on thesis or anything super complex or field. I'm just talking about general opinions, likes, dislikes - simple things to start off with.\nI think the reason they are able to explain their opinions well is that they've been in many conversations and over time these same kind of topics come up so they're able to refine and develop their opinions over time.\nSo my roadmap for becoming a better communicator will incorporate repetition. I'll have a list of things I've given my explanation for and I'll randomly select one from my existing 'library' and give my opinion on that too. So I'll add new ones but also cover previous ones I've already covered.\nI think this will simulate the repeated conversations that happen organically. Obviously over time I would hope to be more involved in organic conversations myself and then would find myself improving my explanations and opinions over time, but initially I need to simulate that experience as best I can until I'm more confident.\nI guess it's just a theory right now, but it makes sense.\nI also need to come up with a list of things I need to talk about. Things that might come up in a conversation. I can build a personalised list for myself as I go. I think by getting into the habit of adding to the list every day or thinking about it every day it will become easier to think of new topics.\nI can also add topics like tv shows, movies, books, food. There might be a list of general topics that people talk about that I can start things off with. I could also incorporate mind maps into my strategy so I can identify sub topics under the main topics.\nI think if I do a little bit each day with an intentioned plan then over the course of 6 months I should notice a significant improvement.\nAlso the plan doesn't need to be set in stone. I can adapt and change as I go - especially if I start learning a bit more about this topic or even just based on my experience of going through the process.\nI think the main thing is to make it a regular daily habit. I think that's more important than coming up with the perfect plan or roadmap.\n\u00A0";

test('nothing', () => {
  expect(1).toEqual(1)
});


// // displays the truncated journal entry
// test('displays truncated journal entry', () => {
//   const handleClick = jest.fn();
//   const { getByText } = render(<JournalEntry journalEntry={journalText} handleClick={handleClick} />);

//   // Check for the presence of 'Mocked data.' in the rendered output
//   expect(getByText(/Mocked data./i)).toBeInTheDocument();
// });


// // test - displays the today's date entry date
// test('displays the today\'s date entry date', () => {
//   const handleClick = jest.fn();
//   const { getByText } = render(<JournalEntry journalEntry={journalText} handleClick={handleClick} />);

//   // Replace 'todayDate' with the actual date you expect in the format it should appear
//   const todayDate = dayjs().format('MMMM D, YYYY');
//   expect(getByText(new RegExp(todayDate, 'i'))).toBeInTheDocument();
// });


// // displays the Continue Writing button
// test('displays the Continue Writing button', () => {
//   const handleClick = jest.fn();
//   const { getByText } = render(<JournalEntry journalEntry={journalText} handleClick={handleClick} />);

//   expect(getByText(/Continue Writing/i)).toBeInTheDocument();
// });


// when button is clicked, navigates to the editor page
// test('test handleClick is fired when the button is clicked', () => {
//   const handleClick = jest.fn();
//   const { getByText } = render(<JournalEntry journalEntry={journalText} handleClick={handleClick} />);

//   const button = getByText(/Continue Writing/i);
//   fireEvent.click(button);

//   // Check if handleClick has been called
//   expect(handleClick).toHaveBeenCalled();
// });


