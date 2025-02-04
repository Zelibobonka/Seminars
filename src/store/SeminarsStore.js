import { runInAction, makeAutoObservable } from "mobx";
import { defaultData } from "../data/defaultData";
import toast from "react-hot-toast";

class SeminarsStore {
  seminars = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  /* Получение данных */
  fetchSeminars = async () => {
    runInAction(() => {
      this.isLoading = true;
    });

    try {
      const response = await fetch("http://localhost:5000/seminars");
      const data = await response.json();

      runInAction(() => {
        this.seminars = data;
      });
    } catch (error) {
      toast.error("Ошибка при загрузке семинаров"); //Всплывающее сообщение
      console.error("Ошибка при загрузке семинаров", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  /* Удаление семинара */
  deleteSeminar = async (id) => {
    runInAction(() => {
      this.isLoading = true;
    });

    try {
      await fetch(`http://localhost:5000/seminars/${id}`, {
        method: "DELETE",
      });

      toast.success("Семинар успешно удален"); //Всплывающее сообщение

      runInAction(() => {
        this.seminars = this.seminars.filter((seminar) => seminar.id !== id);
      });
    } catch (error) {
      toast.error("Ошибка при удалении семинара"); //Всплывающее сообщение
      console.error("Ошибка при удалении семинара", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  /* Обновление семинара */
  updateSeminar = async (id, updatedData) => {
    runInAction(() => {
      this.isLoading = true;
    });

    try {
      const response = await fetch(`http://localhost:5000/seminars/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const updatedSeminar = await response.json();
      const index = this.seminars.findIndex((seminar) => seminar.id === id);

      if (index !== -1) {
        runInAction(() => {
          this.seminars[index] = updatedSeminar;
        });
      }

      toast.success("Семинар успешно обновлен"); //Всплывающее сообщение
    } catch (error) {
      toast.error("Ошибка при обновлении семинара"); //Всплывающее сообщение
      console.error("Ошибка при обновлении семинара", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  /* Загрузка начальных данных */
  resetDatabase = async () => {
    runInAction(() => {
      this.isLoading = true;
    });

    try {
      const response = await fetch("http://localhost:5000/seminars");
      const seminars = await response.json();

      //Удаление старых данных
      await Promise.all(
        seminars.map((seminar) =>
          fetch(`http://localhost:5000/seminars/${seminar.id}`, {
            method: "DELETE",
          })
        )
      );

      //Загрузка новых данных
      await Promise.all(
        defaultData.map((seminar) =>
          fetch("http://localhost:5000/seminars", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(seminar),
          })
        )
      );

      toast.success("Данные успешно сброшены"); //Всплывающее сообщение

      runInAction(() => {
        this.seminars = defaultData;
      });
    } catch (error) {
      toast.error("Ошибка сброса данных"); //Всплывающее сообщение
      console.error("Ошибка сброса данных", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export const seminarsStore = new SeminarsStore();
