import datetime


def parse_expense(expense):
    """Parse the list of expenses and return a list of triples (date, amount, description)
    Ignore the numbers start with # 
    Parse the date using datetime."""

    expenses = []
    for line in expense.splitlines():
        if line.startswith("#"):
            continue
        date, amount, description = line.split()
        date = datetime.datetime.strptime(date, "%Y-%m-%d")
        amount = float(amount)
        expenses.append((date, amount, description))
    return expenses
