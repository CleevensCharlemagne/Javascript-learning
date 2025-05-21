function addDays(date, days) {
        const result = new Date(date); // on crée une copie de la date
        result.setDate(result.getDate() + days); // on ajoute les jours
        return result; // on renvoie un objet Date
      }

      const MONTHS = "months";
      const DAYS = "days";
      const YEARS = "years";

      function addInterval(date, n, unit) {
        const newDate = new Date(date); // on crée une copie de la date
        switch (unit) {
          case DAYS:
            newDate.setDate(date.getDate() + n);
            break;
          case MONTHS:
            newDate.setMonth(date.getMonth() + n);
            break;
          case YEARS:
            newDate.setFullYear(date.getFullYear() + n);
            break;
        }

        return newDate;
      }
      
      const today = new Date();
      const tomorrow = addDays(today, 1);
      const future = addInterval(today, 3, MONTHS);

      console.log(tomorrow.toDateString());
      console.log(future.toDateString());