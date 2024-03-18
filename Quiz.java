import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

class Question {
    private String question;
    private List<String> options;
    private String correctAnswer;

    public Question(String question, List<String> options, String correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    public String getQuestion() {
        return question;
    }

    public List<String> getOptions() {
        return options;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }
}

public class Quiz {
    private List<Question> questions;
    private int score;

    public Quiz(List<Question> questions) {
        this.questions = questions;
        this.score = 0;
    }

    public void start() {
        Scanner scanner = new Scanner(System.in);
        Collections.shuffle(questions);
        
        for (Question question : questions) {
            System.out.println(question.getQuestion());
            List<String> options = question.getOptions();
            Collections.shuffle(options);
            for (int i = 0; i < options.size(); i++) {
                System.out.println((i + 1) + ". " + options.get(i));
            }
            System.out.print("Enter your choice: ");
            int userChoice = scanner.nextInt();
            String userAnswer = options.get(userChoice - 1);
            if (userAnswer.equals(question.getCorrectAnswer())) {
                System.out.println("Correct!");
                score++;
            } else {
                System.out.println("Incorrect! The correct answer is: " + question.getCorrectAnswer());
            }
            System.out.println();
        }

        System.out.println("Quiz ended! Your score is: " + score + "/" + questions.size());
    }

    public static void main(String[] args) {
        List<Question> questions = new ArrayList<>();
        // Aggiungi qui le tue domande con risposte e opzioni
        questions.add(new Question("Qual è la capitale dell'Italia?", List.of("Roma", "Milano", "Firenze", "Napoli"), "Roma"));
        questions.add(new Question("Qual è il simbolo chimico dell'acqua?", List.of("H2O", "CO2", "O2", "NaCl"), "H2O"));
        // Aggiungi più domande se necessario
        
        Quiz quiz = new Quiz(questions);
        quiz.start();
    }
}
