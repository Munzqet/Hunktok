import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class MultipleChoiceQuiz {

    static class Question {
        String question;
        List<String> options;
        int correctAnswerIndex;

        public Question(String question, List<String> options, int correctAnswerIndex) {
            this.question = question;
            this.options = options;
            this.correctAnswerIndex = correctAnswerIndex;
        }
    }

    public static void main(String[] args) {
        List<Question> questions = new ArrayList<>();
        questions.add(new Question("Quanto fa 2 + 2?", List.of("3", "4", "5", "6"), 1));
        questions.add(new Question("Qual è la capitale dell'Italia?", List.of("Roma", "Milano", "Firenze", "Napoli"), 0));
        questions.add(new Question("Quale pianeta è più vicino al Sole?", List.of("Terra", "Venere", "Mercurio", "Marte"), 2));

        Collections.shuffle(questions);

        Scanner scanner = new Scanner(System.in);
        int correctAnswers = 0;

        System.out.println("Benvenuto al quiz!");

        for (Question question : questions) {
            System.out.println(question.question);
            List<String> options = question.options;
            Collections.shuffle(options);
            for (int i = 0; i < options.size(); i++) {
                System.out.println((i + 1) + ". " + options.get(i));
            }

            System.out.print("Seleziona il numero corrispondente alla risposta: ");
            int userChoice = scanner.nextInt();
            scanner.nextLine(); // Consuma il resto della riga

            if (userChoice >= 1 && userChoice <= options.size()) {
                if (userChoice - 1 == question.correctAnswerIndex) {
                    System.out.println("Risposta corretta!");
                    correctAnswers++;
                } else {
                    System.out.println("Risposta sbagliata. La risposta corretta è: " + options.get(question.correctAnswerIndex));
                }
            } else {
                System.out.println("Scelta non valida. La risposta corretta è: " + options.get(question.correctAnswerIndex));
            }
            System.out.println();
        }

        System.out.println("Hai risposto correttamente a " + correctAnswers + " domande su " + questions.size() + ".");
    }
}
