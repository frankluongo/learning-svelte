function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default async function getQuiz() {
  try {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&category=25&type=multiple'
    );
    const data = await res.json();
    const processedData = {
      ...data,
      results: data?.results.map((item) => {
        const allAnswers = [
          ...item.incorrect_answers.map((answer) => ({
            answer,
            correct: false,
          })),
          { answer: item.correct_answer, correct: true },
        ];

        return {
          ...item,
          answers: shuffle(allAnswers),
        };
      }),
    };
    return processedData;
  } catch (e) {
    throw new Error(e);
  }
}
