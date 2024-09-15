from fastapi.staticfiles import StaticFiles

class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        response = await super().get_response(path, scope)
        if response.status_code == 404:
            response = await super().get_response('.', scope)
        return response


def setup_spa(app):
    app.mount('/', SPAStaticFiles(directory='spa_dist', html=True), name='spa')
    app.mount('/assets/', SPAStaticFiles(directory='spa_dist/assets', html=True), name='spa-assets')
