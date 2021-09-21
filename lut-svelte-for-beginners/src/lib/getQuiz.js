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
        return {
          ...item,
          answers: shuffle([item.correct_answer, ...item.incorrect_answers]),
        };
      }),
    };
    return processedData;
  } catch (e) {
    throw new Error(e);
  }
}
