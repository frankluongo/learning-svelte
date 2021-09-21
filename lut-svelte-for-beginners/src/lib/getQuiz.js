export default async function getQuiz() {
  try {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&category=25&type=multiple'
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
}
