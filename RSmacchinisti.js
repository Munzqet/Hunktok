import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class RandomQuiz {

    static class Question {
        String question;
        List<String> options;
        String answer;

        public Question(String question, List<String> options, String answer) {
            this.question = question;
            this.options = options;
            this.answer = answer;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Question> questions = new ArrayList<>();
        questions.add(new Question("Quanto fa 2 + 2?", List.of("3", "4", "5", "6"), "4"));
        questions.add(new Question("Qual è la capitale dell'Italia?", List.of("Roma", "Milano", "Firenze", "Napoli"), "Roma"));
        questions.add(new Question("Quale pianeta è più vicino al Sole?", List.of("Terra", "Venere", "Mercurio", "Marte"), "Mercurio"));

        Collections.shuffle(questions);

        System.out.println("Benvenuto al Quiz!");

        int correctAnswers = 0;
        int totalQuestions = questions.size();
        boolean showAnswers = false;

        for (Question question : questions) {
            System.out.println(question.question);
            Collections.shuffle(question.options);
            for (int i = 0; i < question.options.size(); i++) {
                System.out.println((i + 1) + ". " + question.options.get(i));
            }

            System.out.print("Inserisci il numero corrispondente alla risposta (o premi 'q' per terminare il quiz): ");
            String userInput = scanner.nextLine().trim();

            if (userInput.equalsIgnoreCase("q")) {
                showAnswers = true;
                break;
            }

            int userChoice;
            try {
                userChoice = Integer.parseInt(userInput);
            } catch (NumberFormatException e) {
                System.out.println("Input non valido.");
                continue;
            }

            if (userChoice >= 1 && userChoice <= question.options.size()) {
                String userAnswer = question.options.get(userChoice - 1);
                if (userAnswer.equals(question.answer)) {
                    correctAnswers++;
                } else {
            } else {
                System.out.println("Scelta non valida.");
            }
            System.out.println();
        }

        System.out.println("Hai risposto correttamente a " + correctAnswers + " domande su " + totalQuestions + ".");

        if (showAnswers) {
            System.out.println("Ecco le risposte corrette:");
            for (Question question : questions) {
                System.out.println(question.question + ": " + question.answer);
            }
        }
    }
}
