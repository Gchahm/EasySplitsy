from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        response = await super().get_response(path, scope)
        if response.status_code == 404:
            response = await super().get_response('.', scope)
        return response

app.mount('/', SPAStaticFiles(directory='spa_dist', html=True), name='spa')
app.mount('/assets/', SPAStaticFiles(directory='spa_dist/assets', html=True), name='spa-assets')
