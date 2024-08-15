/**
 * Renders a section displaying the number of completed tasks and the total number of tasks.
 *
 * @param {number} Taskcompleted - The number of completed tasks.
 * @param {number} Taskincomplete - The number of incomplete tasks.
 * @returns {JSX.Element} - A React component that displays the task completion information.
 */
export default function TODOHero(Taskcompleted, Taskincomplete) {
  return (
    <>
      <section>
        <div>
          <p>Task Done</p>
          <p>Keep it up</p>
        </div>
        <div>
          {todos_completed}/{total_todos}
        </div>
      </section>
    </>
  );

}