import { test, expect } from "@playwright/test";

test.describe("Plantão+", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test("deve carregar o dashboard principal", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Plantão+" })
    ).toBeVisible();

    await expect(page.getByText("Dashboard hospitalar")).toBeVisible();
    await expect(page.getByText("Pacientes no setor")).toBeVisible();
    await expect(page.getByText("Mapa de leitos")).toBeVisible();
    await expect(page.getByText("Lista de pacientes")).toBeVisible();
  });

  test("deve exibir os pacientes iniciais", async ({ page }) => {
    await expect(page.getByText("Maria Aparecida").first()).toBeVisible();
    await expect(page.getByText("João Carlos").first()).toBeVisible();
    await expect(page.getByText("Ana Beatriz").first()).toBeVisible();
    await expect(page.getByText("Carlos Eduardo").first()).toBeVisible();
  });

  test("deve cadastrar um novo paciente", async ({ page }) => {
    await page.getByPlaceholder("Ex: José Almeida").fill("Renata Lima");
    await page.getByPlaceholder("Ex: 52").fill("45");
    await page.getByPlaceholder("Ex: Leito 05").fill("Leito 05");

    await page.locator('select[name="risk"]').selectOption("Atenção");

    await page
      .getByPlaceholder("Ex: Dor abdominal intensa")
      .fill("Cefaleia intensa");

    await page
      .locator('select[name="status"]')
      .selectOption("Aguardando avaliação");

    await page
      .getByPlaceholder("Ex: Dipirona 1g - pendente")
      .fill("Dipirona 1g - pendente");

    await page.getByPlaceholder("Ex: 120/80").fill("140/90");
    await page.getByPlaceholder("Ex: 82").fill("94");
    await page.getByPlaceholder("Ex: 98").fill("97");
    await page.getByPlaceholder("Ex: 36.5").fill("37.8");

    await page.getByRole("button", { name: "Adicionar paciente" }).click();

    await expect(page.getByText("Renata Lima").first()).toBeVisible();
    await expect(page.getByText("Cefaleia intensa").first()).toBeVisible();
    await expect(page.getByText("Leito 05").first()).toBeVisible();
  });

  test("deve manter paciente cadastrado após recarregar a página", async ({
    page,
  }) => {
    await page.getByPlaceholder("Ex: José Almeida").fill("Renata Lima");
    await page.getByPlaceholder("Ex: 52").fill("45");
    await page.getByPlaceholder("Ex: Leito 05").fill("Leito 05");

    await page.locator('select[name="risk"]').selectOption("Atenção");

    await page
      .getByPlaceholder("Ex: Dor abdominal intensa")
      .fill("Cefaleia intensa");

    await page
      .locator('select[name="status"]')
      .selectOption("Aguardando avaliação");

    await page
      .getByPlaceholder("Ex: Dipirona 1g - pendente")
      .fill("Dipirona 1g - pendente");

    await page.getByPlaceholder("Ex: 120/80").fill("140/90");
    await page.getByPlaceholder("Ex: 82").fill("94");
    await page.getByPlaceholder("Ex: 98").fill("97");
    await page.getByPlaceholder("Ex: 36.5").fill("37.8");

    await page.getByRole("button", { name: "Adicionar paciente" }).click();

    await expect(page.getByText("Renata Lima").first()).toBeVisible();

    await page.reload();

    await expect(page.getByText("Renata Lima").first()).toBeVisible();
  });

  test("deve restaurar os dados iniciais", async ({ page }) => {
    await page.getByPlaceholder("Ex: José Almeida").fill("Paciente Teste");
    await page.getByPlaceholder("Ex: 52").fill("30");
    await page.getByPlaceholder("Ex: Leito 05").fill("Leito 08");

    await page.locator('select[name="risk"]').selectOption("Estável");

    await page
      .getByPlaceholder("Ex: Dor abdominal intensa")
      .fill("Teste automatizado");

    await page
      .locator('select[name="status"]')
      .selectOption("Aguardando avaliação");

    await page
      .getByPlaceholder("Ex: Dipirona 1g - pendente")
      .fill("Sem medicação - administrada");

    await page.getByPlaceholder("Ex: 120/80").fill("120/80");
    await page.getByPlaceholder("Ex: 82").fill("80");
    await page.getByPlaceholder("Ex: 98").fill("98");
    await page.getByPlaceholder("Ex: 36.5").fill("36.5");

    await page.getByRole("button", { name: "Adicionar paciente" }).click();

    await expect(page.getByText("Paciente Teste").first()).toBeVisible();

    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });

    await page
      .getByRole("button", { name: "Restaurar dados iniciais" })
      .click();

    await expect(page.getByText("Paciente Teste")).toHaveCount(0);
    await expect(page.getByText("Maria Aparecida").first()).toBeVisible();
  });
});