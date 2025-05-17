import random
easy_level=10
hard_level=5
def set_difficulty(level_chosen):
    if level_chosen=='easy':
        return easy_level
    elif level_chosen=='hard':
        return hard_level
    else:
        return
def check_answer(guessed_number,re,attempts):
    if guessed_number<re:
        print("your guess is too low")
        return attempts-1
    elif guessed_number>re:
        print("your guess is too high")
        return attempts-1
    else:
        print(f"your guess is right.. the answer was {re}")
def game():
    print("let me think of a number between 1 to 100.")
    re=random.randint(1,100)
    level=input("choose level of difficulty... Type 'easy' or 'hard':")
    attempts=set_difficulty(level)
    if attempts!=easy_level and attempts!=hard_level:
        print("you have entered wrong difficulty level..play again!!")
        return
    guessed_number=0
    while guessed_number!=re:
        print(f"You have {attempts} remaining to guess the number.")
        guessed_number=int(input("guess a number:"))
        attempts=check_answer(guessed_number,re,attempts)
        if attempts==0:
            print("you are out of guesses.. you loose!")
            return
        elif guessed_number!=re:
            print("guess again")
game()