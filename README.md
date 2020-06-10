## Hangman Game

Jedno z dostępnym zadań rekrutacyjnych firmy Netguru dla mid front-end developera.

### Zastosowane rozwiązania

- Gra została napisana w Reactie przy zastosowaniu Hooków oraz ContextAPI w celu stworzenia globalnego stanu.
- Słowa, które należy odgadnąć są zaciągane z WordsAPI dzięki hookowi useEffect.
- Sterowanie za pomocą klawiatury, ograniczone tylko do liter.

### Pokonane przeszkody

- Autofocus na całym ekranie przeglądarki od razu po wejściu na stronę, aby nie musieć klikać w ekran, żeby uruchomić sterowanie.
  Jednocześnie wyłączenie tej funkcjonalności po wygraniu/przegraniu gry.
- Pozbycie się re-renderingu przy używaniu klawiszy (ponownego odpytywania API o nowe słowo)
- Oznaczanie spacji w przychodzącym słowie jako puste okienko
